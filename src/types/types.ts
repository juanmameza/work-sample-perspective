type Block = {
  id: string;
  type: string;
};

type ListItem = {
  title: string;
  description: string;
  src: string;
};

interface TextBlock extends Block {
  text: string;
  color: string;
  align: string;
}

interface ImageBlock extends Block {
  src: string;
}

interface ListBlock extends Block {
  items: ListItem[];
}

interface ButtonBlock extends Block {
  text: string;
  color: string;
  bgColor: string;
}

type Page = {
  id: string;
  blocks: Block[];
};

type Funnel = {
  name: string;
  bgColor: string;
  pages: Page[];
};
