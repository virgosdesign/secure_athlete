/** @format */

export async function GET() {
	return new Response(JSON.stringify({ msg: 'Secure Athlete!' }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
