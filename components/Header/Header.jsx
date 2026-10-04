import React from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Cookie, Refrigerator, Sparkles } from 'lucide-react'
import Image from "next/image";
import { checkUser } from '@/lib/checkUser';
import PricingModal from "../PricingModal";
import { Badge } from "@/components/ui/badge";
import UserDropdown from "../UserDropdown";



const Header = async () => {
    const user = await checkUser()
    return (
        <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href='/'
                    className="flex items-center gap-2 group"
                >
                    <Image
                        src="/orange-logo.png"
                        alt="Servd Logo"
                        width={60}
                        height={60}
                        className="w-16"
                    />
                </Link>
                {/* Navigation Links */}
                <div className="flex items-center space-x-8 text-sm font-medium text-stone-600">
                    <Link
                        href="/recipes"
                        className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
                    >
                        <Cookie className="w-4 h-4" />
                        My Recipes
                    </Link>
                    <Link
                        href="/pantry"
                        className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
                    >
                        <Refrigerator className="w-4 h-4" />
                        My Pantry
                    </Link>
                </div>
                {/* Action Buttons */}
                <div className="flex items-center space-x-4">

                    <Show when="signed-in">
                        {/* Pricing Modal with Built-in Trigger */}
                        {user && (
                            <PricingModal subscriptionTier={user.subscriptionTier}>
                                <Badge
                                    variant="outline"
                                    className={`flex h-8 px-3 gap-1.5 rounded-full text-xs font-semibold transition-all ${user.subscriptionTier === "pro"
                                        ? "bg-linear-to-r from-orange-600 to-amber-500 text-white border-none shadow-sm"
                                        : "bg-stone-200/50 text-stone-600 border-stone-200 cursor-pointer hover:bg-stone-300/50 hover:border-stone-300"
                                        }`}
                                >
                                    <Sparkles
                                        className={`h-3 w-3 ${user.subscriptionTier === "pro"
                                            ? "text-white fill-white/20"
                                            : "text-stone-500"
                                            }`}
                                    />
                                    <span>
                                        {user.subscriptionTier === "pro" ? "Pro Chef" : "Free Plan"}
                                    </span>
                                </Badge>
                            </PricingModal>
                        )}

                        <UserDropdown />
                    </Show>

                    <Show when="signed-out">
                        <SignInButton >
                            <button className="text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-medium">
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton >
                            <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </Show>
                    {/* <Show when="signed-in">
                        <UserButton />
                    </Show> */}
                </div>
            </nav>
        </header>
    )
}

export default Header