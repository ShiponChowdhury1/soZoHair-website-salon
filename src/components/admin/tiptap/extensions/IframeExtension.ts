import { Node, mergeAttributes } from "@tiptap/core";

export interface IframeOptions {
  allowFullscreen: boolean;
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    iframe: {
      /**
       * Insert an iframe embed
       */
      setIframe: (options: { src: string }) => ReturnType;
    };
  }
}

export const IframeExtension = Node.create<IframeOptions>({
  name: "iframe",

  group: "block",

  selectable: true,
  draggable: true,
  atom: true,

  addOptions() {
    return {
      allowFullscreen: true,
      HTMLAttributes: {
        class: "tiptap-iframe-embed w-full h-[380px] rounded-2xl border border-[#C4956A]/20 shadow-md my-4",
      },
    };
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      frameborder: {
        default: 0,
      },
      allowfullscreen: {
        default: true,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "iframe[src]",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    // Basic URL sanitization
    let src = HTMLAttributes.src || "";
    if (!src.startsWith("http://") && !src.startsWith("https://") && !src.startsWith("//")) {
      src = `https://${src}`;
    }

    return [
      "iframe",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, { src }),
    ];
  },

  addCommands() {
    return {
      setIframe:
        (options) =>
        ({ commands }) => {
          // Sanitize URL before setting
          let cleanSrc = options.src.trim();
          if (!cleanSrc.startsWith("http://") && !cleanSrc.startsWith("https://") && !cleanSrc.startsWith("//")) {
            cleanSrc = `https://${cleanSrc}`;
          }

          return commands.insertContent({
            type: this.name,
            attrs: { src: cleanSrc },
          });
        },
    };
  },
});
