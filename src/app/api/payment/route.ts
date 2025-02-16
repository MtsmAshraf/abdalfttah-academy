export async function GET() {
    try {
        const key = process.env.NEXT_PUBLIC_FAWATERAK; // Use a server-side variable (without NEXT_PUBLIC_)
        
        const response = await fetch("https://staging.fawaterk.com/api/v2/getPaymentmethods", {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${key}`,
                "Content-Type": "application/json"
            },
            redirect: 'follow'
        });

        const data = await response.json();
        return Response.json(data); // Use Response object in App Router
    } catch (error) {
        return Response.json({ message: "Request failed", error }, { status: 500 });
    }
}
