import DOMPurify from 'isomorphic-dompurify';

export const sanitizeMarkdownHtml = (html: string) => DOMPurify.sanitize(html);
