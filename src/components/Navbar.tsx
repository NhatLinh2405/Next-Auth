import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function Navbar() {
	const { data: session } = useSession();
	return (
		<nav className="header">
			<h1 className="logo">
				<Link href="/">NextAuth</Link>
			</h1>

			<ul className={`main-nav`}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li>
					<Link href="/protected">protected</Link>
				</li>
				<li>
					{session ? (
						<>
							<button
								onClick={(e) => {
									e.preventDefault();
									signOut();
								}}
							>
								Sign out
							</button>

							<h1>{session?.user?.name}</h1>
							{/* <Image src={session?.user?.image} width={144px} /> */}
						</>
					) : (
						// <Link
						// 	href="/api/auth/signin"
						// 	onClick={(e) => {
						// 		e.preventDefault();
						// 		signIn();
						// 	}}
						// >
						// 	Sign in
						// 	</Link>
						<button
							onClick={(e) => {
								e.preventDefault();
								signIn();
							}}
						>
							Sign In
						</button>
					)}
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
