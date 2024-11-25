import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";

interface TaskData {
  task_name?: string;
  task_description?: string;
  date?: string;
  observer?: string;
  assessed_person?: string;
  company_name?: string;
  task_id?: number;
}

interface AddTaskProps {
  onSave: () => void; // Function type for the onSave callback
  isEdit?: boolean;
  initialData?: TaskData;
}

export const AddTask: React.FC<AddTaskProps> = ({
  onSave,
  isEdit = false,
  initialData = {},
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [date, setDate] = useState("");
  const [observer, setObserver] = useState("");
  const [assessedPerson, setAssessedPerson] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Explicitly type error as string or null

  useEffect(() => {
    if (isEdit) {
      setTaskName(initialData.task_name || "");
      setTaskDescription(initialData.task_description || "");
      setDate(initialData.date || "");
      setObserver(initialData.observer || "");
      setAssessedPerson(initialData.assessed_person || "");
      setCompanyName(initialData.company_name || "");
      onOpen();
    }
  }, [isEdit, initialData, onOpen]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const method = isEdit ? "PUT" : "POST";
      const url = isEdit
        ? `${process.env.NEXT_PUBLIC_API_URL}/task/edit/${initialData.task_id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/task/simpan`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_name: taskName,
          task_description: taskDescription,
          date: date,
          observer: observer,
          assessed_person: assessedPerson,
          company_name: companyName,
        }),
      });
      if (!response.ok) {
        throw new Error(`Failed to ${isEdit ? "update" : "save"} task`);
      }
      if (onSave) onSave();
      // Clear form
      setTaskName("");
      setTaskDescription("");
      setDate("");
      setObserver("");
      setAssessedPerson("");
      setCompanyName("");
      onOpenChange();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onPress={onOpen} color="primary">
        {isEdit ? "Edit Task" : "Add Task"}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {isEdit ? "Edit Task" : "Add Task"}
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Task Name"
                  variant="bordered"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
                <Input
                  label="Task Description"
                  variant="bordered"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                />
                <Input
                  label="Date"
                  type="date"
                  variant="bordered"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <Input
                  label="Observer"
                  variant="bordered"
                  value={observer}
                  onChange={(e) => setObserver(e.target.value)}
                />
                <Input
                  label="Assessed Person"
                  variant="bordered"
                  value={assessedPerson}
                  onChange={(e) => setAssessedPerson(e.target.value)}
                />
                <Input
                  label="Company Name"
                  variant="bordered"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSave} disabled={loading}>
                  {loading ? "Saving..." : isEdit ? "Save Changes" : "Add Task"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
