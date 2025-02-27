import type { ImproveTextOptions, ImproveTextResponse } from './types';
import { TextImprover } from './TextImprover';

export const improveText = async (
  text: string,
  options: Omit<ImproveTextOptions, 'text'> = {}
): Promise<ImproveTextResponse> => {
  const improver = new TextImprover();
  const { temperature = 0.7, maxTokens = 2000 } = options;
  return await improver.improveText({
    text,
    temperature,
    maxTokens,
    ...options,
  });
};
