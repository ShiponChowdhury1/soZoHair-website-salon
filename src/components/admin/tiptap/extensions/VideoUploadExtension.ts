import { Node, mergeAttributes } from "@tiptap/core";

export interface VideoUploadOptions {
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    videoUpload: {
      /**
       * Set a local video node
       */
      setVideoUpload: (options: { src: string; alt?: string }) => ReturnType;
    };
  }
}

export const VideoUploadExtension = Node.create<VideoUploadOptions>({
  name: "videoUpload",

  group: "block",

  selectable: true,
  draggable: true,
  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {
        controls: true,
        class: "tiptap-uploaded-video w-full rounded-2xl border border-[#C4956A]/20 shadow-md my-4 max-h-[450px]",
      },
    };
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      controls: {
        default: true,
      },
      alt: {
        default: "Salon Video",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "video[src]",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "video",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  addCommands() {
    return {
      setVideoUpload:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
});
