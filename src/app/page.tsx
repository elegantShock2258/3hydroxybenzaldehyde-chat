"use client";
import Minidenticon from "@/components/molecules/MinIdentIcon/MinidentIcon";
import styles from "./home.module.sass";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

export default function Page() {
  let router = useRouter();
  return (
    <div className={styles.parent}>
      Hi There!
      <button className={styles.button} onClick={() => router.push("/chat/")}>
        <Minidenticon
          className={styles.icon}
          username="CHATTTlkghilugilgHTHTHTHTHTHT"
        />
        <div className="h-full flex items-center justify-center press-start-2p">
          {" "}
          Start Chat{" "}
        </div>
      </button>
    </div>
  );
}
