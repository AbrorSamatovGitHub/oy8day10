import React from "react";
import HeaderLogo from "../../../../public/header_logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchIcon from "@/img/searchIcon";
import FilterIcon from "@/img/filterIcon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UzbIcon from "@/img/uzbIcon";
import RingIcon from "@/img/ringIcon";
import UserIcon from "@/img/userIcon";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <HeaderLogo />
        <div className="max-w-[820px] flex items-center space-x-2 relative">
          <div className="absolute left-5">
            <SearchIcon />
          </div>
          <Input
            className=" outline-green-500  pl-[40px] w-[820px] h-[47px]"
            type="text"
            placeholder="Qidirish"
          />
          <Button className="bg-green-500 hover:bg-green-400 h-[47px] absolute right-0 flex gap-2">
            {" "}
            <FilterIcon />
            <span>Filter</span>{" "}
          </Button>
        </div>
        <div className="">
          <Select>
            <SelectTrigger className="h-[38px] w-[120px]">
              <SelectValue placeholder="Lenguage" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem  value="uzb"> <div className="flex items-center gap-2"><UzbIcon/> <span> Uzb</span></div></SelectItem>
                <SelectItem value="Рус"> <div className="flex items-center gap-2"><UzbIcon/> <span>Рус</span></div>  </SelectItem>
                <SelectItem value="English"> <div className="flex items-center gap-2"><UzbIcon/> <span>English</span></div> </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <RingIcon/>
        </div>
        <Button  className="flex gap-3" variant="link">
          <span>Kirish</span>
          <UserIcon/>
        </Button>
      </div>
    </div>
  );
};

export default Header;
