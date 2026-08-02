export const sendContactEmail = async (formData) => {
  let response;

  try {
    response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  } catch {
    throw new Error("Contact server is not running. Start it with npm run server.");
  }

  const contentType = response.headers.get("content-type") || "";
  const result = contentType.includes("application/json")
    ? await response.json().catch(() => ({}))
    : { message: await response.text().catch(() => "") };

  if (!response.ok) {
    const message = result.message || "";

    if (message.includes("ECONNREFUSED") || message.includes("proxy error")) {
      throw new Error("Contact server is not running. Start it with npm run server.");
    }

    throw new Error(message || "Unable to send email.");
  }

  return result;
};
