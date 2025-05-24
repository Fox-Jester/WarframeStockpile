export function BlockInvalidKey(e: React.KeyboardEvent){
        ['e',"E",'+','-'].includes(e.key) && e.preventDefault();
    }