'use server';
/**
 * @fileOverview An AI-powered content assistant flow for generating ideas and refining textual content for Patricia's portfolio.
 *
 * - generatePortfolioContent - A function that handles content generation or refinement.
 * - GeneratePortfolioContentInput - The input type for the generatePortfolioContent function.
 * - GeneratePortfolioContentOutput - The return type for the generatePortfolioContent function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GeneratePortfolioContentInputSchema = z.object({
  contentType: z
    .enum(['project_description', 'about_section'])
    .describe("The type of content to generate or refine (e.g., 'project_description' or 'about_section')."),
  task: z
    .enum(['generate_ideas', 'refine_content'])
    .describe("The task to perform: 'generate_ideas' or 'refine_content'."),
  existingContent: z
    .string()
    .optional()
    .describe('Existing content to be refined. Required if task is refine_content.'),
  additionalInstructions: z
    .string()
    .optional()
    .describe('Any specific instructions or points to consider for content generation or refinement.'),
});
export type GeneratePortfolioContentInput = z.infer<
  typeof GeneratePortfolioContentInputSchema
>;

const GeneratePortfolioContentOutputSchema = z.object({
  generatedContent: z.string().describe('The AI-generated or refined textual content.'),
});
export type GeneratePortfolioContentOutput = z.infer<
  typeof GeneratePortfolioContentOutputSchema
>;

export async function generatePortfolioContent(
  input: GeneratePortfolioContentInput
): Promise<GeneratePortfolioContentOutput> {
  return generatePortfolioContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioContentPrompt',
  input: { schema: GeneratePortfolioContentInputSchema },
  output: { schema: GeneratePortfolioContentOutputSchema },
  prompt: `You are an expert content assistant for a professional portfolio website. Your goal is to help Patricia generate ideas or refine existing textual content for her '{{contentType}}' section.

Instructions:

{{#ifEq task "generate_ideas"}}
Generate creative and professional ideas for the '{{contentType}}' section. The content should be engaging and reflect Patricia's skills and style. Focus on the following:
  {{#if additionalInstructions}}
  - Additional Instructions: {{{additionalInstructions}}}
  {{else}}
  - Provide a few distinct concepts or bullet points that could be developed into full content.
  {{/if}}
{{/ifEq}}

{{#ifEq task "refine_content"}}
Refine the following existing content for the '{{contentType}}' section. Improve its clarity, impact, professionalism, and conciseness. Ensure it aligns with a modern, dark-themed portfolio website.

Existing Content:
"""
{{{existingContent}}}
"""

{{#if additionalInstructions}}
Pay close attention to these specific instructions during refinement: {{{additionalInstructions}}}
{{else}}
Ensure the refined content is grammatically correct and compelling.
{{/if}}
{{/ifEq}}

Provide the output in JSON format, strictly adhering to the GeneratePortfolioContentOutputSchema.
`,
});

const generatePortfolioContentFlow = ai.defineFlow(
  {
    name: 'generatePortfolioContentFlow',
    inputSchema: GeneratePortfolioContentInputSchema,
    outputSchema: GeneratePortfolioContentOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate content: output was null');
    }
    return output;
  }
);
