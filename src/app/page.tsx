import { Button } from "@/components/ui/button";
import Icon1 from "@/img/Icon1";
import LinkIcon from "@/img/linkIcon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen  mt-[50px] w-[280px] pl-10 pt-8 pr-5  shadow-md">
      <Button className="bg-green-500 hover:bg-green-400 px-10 flex gap-[10px]">
        {" "}
        <Icon1 /> <span>Maxsus buyurtms</span>
      </Button>

      <div className=" flex flex-col  w-[215px] mt-2 " >
        <div className="flex justify-between py-4">
          <Link href="/smartfon">Smartfonlar</Link>
          <LinkIcon/>
        </div>
        <div className="flex justify-between py-4">
          <Link href="/planshet">Planshetlar</Link>
          <LinkIcon/>
        </div>
        <div className="flex justify-between py-4">
          <Link href="/quloqchin">Quloqchinlar</Link>
          <LinkIcon/>
        </div>
        <div className="flex justify-between py-4">
          <Link href="/xotira">Xotira kartalari</Link>
          <LinkIcon/>
        </div>
        <div className="flex justify-between py-4">
          <Link href="/aksesuar">Smartfon aksesuarlari</Link>
          <LinkIcon/>
        </div>
        <div className="flex justify-between py-4">
          <Link href="/gadjet">Gadjetlar</Link>
          <LinkIcon/>
        </div>
        <div className="flex justify-between py-4">
          <Link href="/quvvat ">Quvvatlovchi uskunalar</Link>
          <LinkIcon/>
        </div>
        <div className="flex justify-between py-4" >
          <Link href="/kabel">Kabellar</Link>
          <LinkIcon/>
        </div>
      </div>
    </div>
  );
}
