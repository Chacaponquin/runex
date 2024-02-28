import { useProduct } from "@modules/product/hooks";
import { useState } from "react";
import { SocialMedia } from "../interfaces";
import {
  Facebook,
  Instagram,
  Twitter,
} from "@modules/app/modules/icon/components";

interface Props {
  id: string;
}

export default function useShare({ id }: Props) {
  const {
    buildProductLink,
    buildProductFacebookLink,
    buildProductInstagramLink,
    buildProductTwitterLink,
  } = useProduct();
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    setCopied(true);
  }

  const link = buildProductLink({ id: id, type: "clothe" });

  const socials: Array<SocialMedia> = [
    {
      name: "Instagram",
      color: "rgb(193 53 132)",
      icon: Instagram,
      link: buildProductInstagramLink({ id: id, type: "clothe" }),
    },
    {
      color: "rgb(29 161 242)",
      name: "Twitter",
      icon: Twitter,
      link: buildProductTwitterLink({ id: id, type: "clothe" }),
    },
    {
      color: "rgb(66 103 178)",
      icon: Facebook,
      name: "Facebook",
      link: buildProductFacebookLink({ id: id, type: "clothe" }),
    },
  ];

  return { handleCopy, copied, link, socials };
}
