import fs from 'node:fs';
import path from 'node:path';

// TODO: add more rules and test cases

void (async () => {
    const result = await fs.promises.readFile(path.resolve(__dirname, './test.ts'));

    // @typescript-eslint/prefer-reduce-type-parameter
    Object.entries({ foo: 'bar' }).reduce((acc, [key, value]) => {
        acc[key] = value.length;
        return acc;
    }, {} as Record<string, number>);

    // @typescript-eslint/no-confusing-void-expression
    return void console.log(result);
});
