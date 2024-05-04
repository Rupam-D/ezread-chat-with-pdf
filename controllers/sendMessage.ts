export const sendMessage = async ({
  message,
  fileKey,
}: {
  message: string;
  fileKey: string;
}) => {
  const response = await fetch(`http://localhost:3000/api/message`, {
    method: "POST",
    body: JSON.stringify({
      message,
      fileKey,
    }),
  });

  if (!response.ok) {
    throw new Error("Error in sending the message...");
  }
  return response.body;
};
