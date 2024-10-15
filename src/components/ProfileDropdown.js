import { LucideLogIn, MenuIcon, ShoppingCart, User, UserPlusIcon, X, LogOut } from 'lucide-react';
import Link from 'next/link';

const ProfileDropdown = ({ isAuthenticated, handleLogout }) => {
    return (
        <div className="absolute right-0 mt-2 bg-slate-950 shadow-lg py-4 w-48 h-auto flex flex-col justify-center items-center uppercase font-bold text-sm">
            {isAuthenticated ? (
                <>
                    <Link href="/orders" className="block py-3 text-white hover:text-yellow-300 tracking-wider">My Orders</Link>
                    <button onClick={handleLogout} className="py-3 text-lg text-white hover:text-yellow-300 tracking-wider flex justify-between items-center">
                        Logout <LogOut className="ml-2 w-4" />
                    </button>
                </>
            ) : (
                <>
                    <Link href="/login" className="py-3 text-white hover:text-yellow-300 tracking-wider flex justify-between items-center">
                        Login <LucideLogIn className="ml-2 w-4" />
                    </Link>
                    <Link href="/signup" className="py-3 text-white hover:text-yellow-300 tracking-wider flex justify-between items-center">
                        Signup <UserPlusIcon className="ml-2 w-4" />
                    </Link>
                </>
            )}
        </div>
    );
};

