import { generateHTML } from "@tiptap/html";
import type { JSONContent } from "@tiptap/core";
import { StarterKit } from "@tiptap/starter-kit";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { Image } from "@tiptap/extension-image";
import { Youtube } from "@tiptap/extension-youtube";
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import { Highlight } from "@tiptap/extension-highlight";
import { Underline } from "@tiptap/extension-underline";
import { Link } from "@tiptap/extension-link";
import { TextAlign } from "@tiptap/extension-text-align";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TaskList } from "@tiptap/extension-task-list";
import { TaskItem } from "@tiptap/extension-task-item";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
import { VideoUploadExtension } from "./extensions/VideoUploadExtension";
import { IframeExtension } from "./extensions/IframeExtension";
import { FontSizeExtension } from "./extensions/FontSizeExtension";

const extensions = [
  StarterKit,
  Table,
  TableRow,
  TableCell,
  TableHeader,
  Image,
  Youtube,
  Color,
  TextStyle,
  Highlight,
  Underline,
  Link,
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  Subscript,
  Superscript,
  TaskList,
  TaskItem,
  HorizontalRule,
  VideoUploadExtension,
  IframeExtension,
  FontSizeExtension,
];

/**
 * Safely converts Tiptap JSON content into valid HTML string for public rendering
 */
export function renderTiptapJsonToHtml(jsonContent: JSONContent | null | undefined): string {
  if (!jsonContent) return "";
  try {
    return generateHTML(jsonContent, extensions);
  } catch (error) {
    console.error("Failed to render Tiptap JSON to HTML:", error);
    return "";
  }
}
