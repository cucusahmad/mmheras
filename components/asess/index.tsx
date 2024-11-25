"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Pagination,
} from "@nextui-org/react";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { DotsIcon } from "@/components/icons/accounts/dots-icon";
import { ExportIcon } from "@/components/icons/accounts/export-icon";
import { InfoIcon } from "@/components/icons/accounts/info-icon";
import { TrashIcon } from "@/components/icons/accounts/trash-icon";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { UsersIcon } from "@/components/icons/breadcrumb/users-icon";
import { SettingsIcon } from "@/components/icons/sidebar/settings-icon";
import { ErgonomicRiskTable } from "@/components/asess/ErgonomicRiskTable";

export const Asess = () => {
  return (
    <div className="my-10 px-4 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <UsersIcon />
          <span>Task</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>All Data</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">All Task Asessment</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        
        
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <ErgonomicRiskTable/>;
      </div>
    </div>
  );
};
