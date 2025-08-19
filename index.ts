import { ModelMessage, streamText } from "ai";
import dotenv from 'dotenv'
import * as readline from 'node:readline/promises';

dotenv.config({ path: '.env' });

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function main() {
    const messages: ModelMessage[] = []
    while (true) {
        const userInput = await terminal.question('You: ');

        messages.push({ role: 'user', content: userInput });

        const result = streamText({
            model: 'openai/gpt-5',
            messages,
        });

        let fullResponse = '';
        process.stdout.write('\nAssistant: ');
        for await (const delta of result.textStream) {
            fullResponse += delta;
            process.stdout.write(delta);
        }
        process.stdout.write('\n\n');

        messages.push({ role: 'assistant', content: fullResponse });
    }
}

main().catch(console.error);