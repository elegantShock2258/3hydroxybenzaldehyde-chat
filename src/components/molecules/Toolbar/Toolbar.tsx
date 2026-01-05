import Image from "next/image";
import Minidenticon from "../MinIdentIcon/MinidentIcon";
import styles from "./Toolbar.module.sass";
import { redirect } from "next/navigation";

export default function Toolbar({ title }: { title: string }) {
  return (
    <div className={styles.toolbar}>
      <div
        className={styles.icon}
        onClick={() => {
          redirect("/");
        }}
      >
        {" "}
        <Image src="/icon.svg" width={60} height={60} alt="logo" />{" "}
      </div>
      <div className="w-full press-start-2p">{title.slice(0, 40)} </div>
    </div>
  );
}
