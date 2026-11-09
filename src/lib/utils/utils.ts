export function capitalize(x: string) {
    return x.charAt(0).toUpperCase() + x.slice(1);
}

export function humanizeDate(x: Date) {
    return x.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
