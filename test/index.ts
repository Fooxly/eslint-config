import fs from 'node:fs';
import path from 'node:path';

void (async () => {
    const result = await fs.promises.readFile(
        path.resolve(__dirname, './test.ts'),
    );

    console.log(result);
});
