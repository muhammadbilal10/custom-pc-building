"use server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function checkCompatibility(
  currentComponents: Record<string, any>,
  newComponent: any,
  newComponentCategory: string
): Promise<{ isCompatible: boolean; message: string }> {
  try {
    const componentsToCheck = {
      ...currentComponents,
      [newComponentCategory]: newComponent,
    };

    const prompt = `As a PC building expert, Verify the compatibility of the following PC components:

    ${JSON.stringify(componentsToCheck, null, 2)}

    Check the compatibility of all provided components together

    Provide a concise explanation of:

    1. Why the component(s) are compatible or not.
    2. Suggestions to resolve any issues or improve compatibility.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a PC building expert. Respond with clear, structured compatibility analysis.",
        },
        { role: "user", content: prompt },
      ],
      functions: [
        {
          name: "provideCompatibilityCheck",
          description: "Provide compatibility check results for PC components",
          parameters: {
            type: "object",
            properties: {
              isCompatible: {
                type: "boolean",
                description: "Whether the components are compatible",
              },
              message: {
                type: "string",
                description: "Detailed explanation of compatibility",
              },
            },
            required: ["isCompatible", "message"],
          },
        },
      ],
      function_call: { name: "provideCompatibilityCheck" },
      temperature: 0.7,
      max_tokens: 1000,
    });

    try {
      // Safely parse the function call arguments
      const functionCall = response.choices[0].message.function_call;
      if (!functionCall?.arguments) {
        throw new Error("No function call arguments received");
      }

      console.log(functionCall.arguments);

      const result = JSON.parse(functionCall.arguments);

      console.log(result);

      if (!result) {
        throw new Error("Invalid response format");
      }

      return {
        isCompatible: result.isCompatible,
        message: result.message,
      };
    } catch (parseError) {
      console.error("Error parsing OpenAI response:", parseError);

      // Fallback to using the direct message content if function parsing fails
      const messageContent = response.choices[0].message.content;
      return {
        isCompatible: !messageContent?.toLowerCase().includes("not compatible"),
        message: messageContent || "Please verify compatibility manually.",
      };
    }
  } catch (error) {
    console.error("Compatibility check error:", error);
    return {
      isCompatible: true,
      message:
        "⚠️ Compatibility check unavailable. Please verify compatibility manually:\n\n" +
        "• Check CPU and motherboard socket compatibility\n" +
        "• Verify RAM type and speed support\n" +
        "• Ensure power supply capacity is sufficient\n" +
        "• Confirm case size accommodates all components",
    };
  }
}
