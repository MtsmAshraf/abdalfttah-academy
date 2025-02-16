export async function POST(req: Request) {
    try {
        const body = await req.json(); // Parse incoming request body
        const key = process.env.NEXT_PUBLIC_FAWATERAK; // Use a server-side env variable

        if (!key) {
            return Response.json({ message: "Missing API key" }, { status: 500 });
        }

        const payload = JSON.stringify({
            payment_method_id: body.payment_method_id,
            cartTotal: "5000",
            currency: "EGP",
            customer: {
                first_name: "test",
                last_name: "test",
                email: "test@test.test",
                phone: "01000000000",
                address: "test address"
            },
            redirectionUrls: {
                successUrl: "https://dev.fawaterk.com/success",
                failUrl: "https://dev.fawaterk.com/fail",
                pendingUrl: "https://dev.fawaterk.com/pending"
            },
            cartItems: [
                {
                    name: body.courseName,
                    price: "5000",
                    quantity: "1"
                }
            ]
        });

        const response = await fetch("https://staging.fawaterk.com/api/v2/invoiceInitPay", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${key}`,
                "Content-Type": "application/json"
            },
            body: payload
        });

        const data = await response.json();
        return Response.json(data); // Send the response back to the client
    } catch (error) {
        return Response.json({ message: "Request failed", error }, { status: 500 });
    }
}
