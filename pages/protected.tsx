import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
export default function Page() {
	const { data: session, status } = useSession();
	const loading = status === "loading";
	const [content, setContent] = useState();
	console.log(content);
	// cái đó nó xoá import thừa, tuỳ nhu cầu m bật hay tắt ok
	// thử cái này đi

	// // Fetch content from protected route
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("/api/examples/protected");
			const json = await res.json();
			if (json.content) {
				setContent(json.content);
			}
		};
		fetchData();
	}, [session]);

	// // When rendering client side don't display anything until loading is complete
	// if (typeof window !== "undefined" && loading) return null;

	//If no session exists, display access denied message
	// if (!session) {
	// 	console.log(session);
	// 	return <AccessDenied />;
	// }

	// If session exists, display content
	return (
		<div>
			<h2>Protected Page</h2>
			<p>
				<strong>{content || "\u00a0"}</strong>
			</p>
		</div>
	);
}
