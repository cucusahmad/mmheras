import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Pagination,
  Input,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import { DotsIcon } from "@/components/icons/accounts/dots-icon";
import { ExportIcon } from "@/components/icons/accounts/export-icon";
import { InfoIcon } from "@/components/icons/accounts/info-icon";
import { TrashIcon } from "@/components/icons/accounts/trash-icon";
import { SettingsIcon } from "@/components/icons/sidebar/settings-icon";
import { AddTask } from "@/components/task/add-task"; 

export const TableWrapper = () => {

  interface Task {
    id_task: string | number;
    task_name: string;
    task_description?: string;
    date: string;
    observer?: string;
    assessed_person: string;
    company_name: string;
  }

  type TaskDetail = {
    task_name: string;
    task_description: string;
    date: string;
    observer: string;
    assessed_person: string;
    company_name: string;
  };


  const [data, setData] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskDetail, setTaskDetail] = useState<TaskDetail | null>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Task | null>(null);


  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task/list`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching tasktate(null); detail:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTaskDetail = async (taskId: string | number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task/detail/${taskId}`);
      const result = await response.json();
      setTaskDetail(result);
    } catch (error) {
      console.error("Error fetching task detail:", error);
    }
  };

  const handleViewDetail = (id_task: string | number) => {
    fetchTaskDetail(id_task);
    setDetailModalOpen(true);
  };

  const handleEdit = (item:Task) => {
    setIsEditing(true);
    setEditData(item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSaveTask = () => {
    fetchData();
    setIsEditing(false);
    setEditData(null);
  };

  const handleDelete = async (id: string | number) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task/hapus/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete task");
        }

        await fetchData();
      } catch (error) {
        console.error("Error deleting task:", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        alert(errorMessage);
      }
    }
  };

  const filteredData = data.filter((item) =>
    item.task_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:Error deleting task</p>;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="w-1/2">
          <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
            <Input
              placeholder="Search by task name"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <SettingsIcon />
            <TrashIcon />
            <InfoIcon />
            <DotsIcon />
          </div>
        </div>
        <div className="w-1/2 flex items-center gap-2">
          <span>Items per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            {[5, 10, 20, 50, 100].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <AddTask onSave={handleSaveTask} />
      </div>

      <Table aria-label="Task table with search and pagination">
        <TableHeader>
          <TableColumn>No</TableColumn>
          <TableColumn>Task Name</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Date</TableColumn>
          <TableColumn>Observer</TableColumn>
          <TableColumn>Assessed Person</TableColumn>
          <TableColumn>Company</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {currentData.map((item, index) => (
            <TableRow key={item.id_task.toString()}>
              <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
              <TableCell>{item.task_name}</TableCell>
              <TableCell>{item.task_description || "N/A"}</TableCell>
              <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
              <TableCell>{item.observer || "N/A"}</TableCell>
              <TableCell>{item.assessed_person}</TableCell>
              <TableCell>{item.company_name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Tooltip content="Details">
                    <button onClick={() => handleViewDetail(item.id_task)}>
                      <EyeIcon size={20} fill="#979797" />
                    </button>
                  </Tooltip>
                  <Tooltip content="Edit task" color="secondary">
                    <button onClick={() => handleEdit(item)}>
                      <EditIcon size={20} fill="#979797" />
                    </button>
                  </Tooltip>
                  <Tooltip content="Delete task" color="danger">
                    <button onClick={() => handleDelete(item.id_task)}>
                      <DeleteIcon size={20} fill="#FF0080" />
                    </button>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        total={totalPages}
        initialPage={1}
        onChange={(page) => setCurrentPage(page)}
      />

      <Modal isOpen={detailModalOpen} onClose={() => setDetailModalOpen(false)} placement="top-center">
        <ModalContent>
          <ModalHeader>Task Detail</ModalHeader>
          <ModalBody>
            {taskDetail ? (
              <>
                <p><strong>Task Name:</strong> {taskDetail.task_name}</p>
                <p><strong>Description:</strong> {taskDetail.task_description || "N/A"}</p>
                <p><strong>Date:</strong> {new Date(taskDetail.date).toLocaleDateString()}</p>
                <p><strong>Observer:</strong> {taskDetail.observer || "N/A"}</p>
                <p><strong>Assessed Person:</strong> {taskDetail.assessed_person}</p>
                <p><strong>Company:</strong> {taskDetail.company_name}</p>
              </>
            ) : (
              <p>Loading details...</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setDetailModalOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {isEditing && (
        <AddTask
          onSave={handleSaveTask}
          isEdit={isEditing}
          initialData={editData || {}}
        />
      )}
    </div>
  );
};
