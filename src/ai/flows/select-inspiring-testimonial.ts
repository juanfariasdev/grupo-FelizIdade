'use server';

/**
 * @fileOverview A flow to select the most inspiring testimonial from a list of testimonials.
 *
 * - selectInspiringTestimonial - A function that selects the most inspiring testimonial.
 * - SelectInspiringTestimonialInput - The input type for the selectInspiringTestimonial function.
 * - SelectInspiringTestimonialOutput - The return type for the selectInspiringTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SelectInspiringTestimonialInputSchema = z.object({
  testimonials: z.array(
    z.string().describe('A testimonial from a member of Grupo FelizIdade.')
  ).describe('An array of testimonials to choose from.'),
});
export type SelectInspiringTestimonialInput = z.infer<typeof SelectInspiringTestimonialInputSchema>;

const SelectInspiringTestimonialOutputSchema = z.object({
  inspiringTestimonial: z.string().describe('The most inspiring testimonial from the list.'),
});
export type SelectInspiringTestimonialOutput = z.infer<typeof SelectInspiringTestimonialOutputSchema>;

export async function selectInspiringTestimonial(
  input: SelectInspiringTestimonialInput
): Promise<SelectInspiringTestimonialOutput> {
  return selectInspiringTestimonialFlow(input);
}

const prompt = ai.definePrompt({
  name: 'selectInspiringTestimonialPrompt',
  input: {schema: SelectInspiringTestimonialInputSchema},
  output: {schema: SelectInspiringTestimonialOutputSchema},
  prompt: `You are tasked with selecting the most inspiring and heartwarming testimonial from a list of testimonials about the Grupo FelizIdade.

  Here are the testimonials:
  {{#each testimonials}}
  - {{{this}}}
  {{/each}}

  Which of these testimonials is most likely to attract new members with its inspiring and heartwarming message? Please respond with just the content of that testimonial.`,
});

const selectInspiringTestimonialFlow = ai.defineFlow(
  {
    name: 'selectInspiringTestimonialFlow',
    inputSchema: SelectInspiringTestimonialInputSchema,
    outputSchema: SelectInspiringTestimonialOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      inspiringTestimonial: output!.inspiringTestimonial,
    };
  }
);
