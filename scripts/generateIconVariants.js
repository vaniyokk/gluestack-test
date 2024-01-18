const fs = require("fs");

const ICONS_FOLDER = `${process.cwd()}/assets/icons`;
const ICON_TYPES_FILE = `${process.cwd()}/components/core/Icon/generated.ts`;

const contentComponentImports = [];
const contentVariants = ["export enum IconVariant {\n"];
const contentComponents = ["export const ICON_COMPONENTS = {\n"];

const svgFiles = fs
  .readdirSync(ICONS_FOLDER)
  .filter(fileName => fileName.endsWith(".svg"));

svgFiles.forEach((fileName, index) => {
  const isLastFile = index === svgFiles.length - 1;
  const nameWithoutExtension = fileName.split(".")[0];
  const iconTypeName =
    nameWithoutExtension.charAt(0).toLowerCase() +
    nameWithoutExtension.slice(1);

  contentComponentImports.push(
    `import ${nameWithoutExtension} from "~/assets/icons/${fileName}";`
  );
  contentVariants.push(`  ${iconTypeName} = "${iconTypeName}"`);
  contentComponents.push(`  ${iconTypeName}: ${nameWithoutExtension}`);

  if (isLastFile) {
    contentComponentImports.push("\n\n");
    contentVariants.push("\n}\n\n");
    contentComponents.push("\n};\n");
  } else {
    contentVariants.push(",\n");
    contentComponents.push(",\n");
    contentComponentImports.push("\n");
  }
});

try {
  fs.writeFileSync(
    ICON_TYPES_FILE,
    [
      "// Don't edit this file manually. Use `yarn icons:generateVariants` script.\n",
      contentComponentImports.join(""),
      contentVariants.join(""),
      contentComponents.join("")
    ].join("")
  );
} catch (err) {
  console.error(err);
}
