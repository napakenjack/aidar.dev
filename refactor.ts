import fs from 'fs';
import path from 'path';

function processDir(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let orig = content;
            
            content = content.replace(/\bbg-navy-light\b/g, 'bg-secondary');
            content = content.replace(/\bbg-navy\b/g, 'bg-primary');
            content = content.replace(/\btext-slate-300\b/g, 'text-muted');
            content = content.replace(/\btext-slate-400\b/g, 'text-sub');
            content = content.replace(/\bborder-white\/5\b/g, 'border-border-subtle');
            content = content.replace(/\bborder-white\/10\b/g, 'border-border-medium');
            content = content.replace(/\bbg-white\/5\b/g, 'bg-fg-subtle');
            content = content.replace(/\bbg-white\/10\b/g, 'bg-fg-medium');
            content = content.replace(/\bbg-white\/\[0\.02\]\b/g, 'bg-fg-subtle opacity-50');
            content = content.replace(/\bbg-white\/\[0\.05\]\b/g, 'bg-fg-subtle');
            
            // Replaces text-white -> text-main, mostly on headings.
            content = content.replace(/\btext-white\b/g, 'text-main');

            if (content !== orig) {
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    }
}

processDir(path.resolve('./src'));
