import { useState } from "react";
import { Container, VStack, HStack, Input, Button, IconButton, Text, List, ListItem, Checkbox } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task));
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Todo App</Text>
        <HStack width="100%">
          <Input placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)} />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </HStack>
        <List width="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} display="flex" alignItems="center" justifyContent="space-between" paddingY={2}>
              <HStack>
                <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(index)} />
                <Text as={task.completed ? "s" : ""}>{task.text}</Text>
              </HStack>
              <IconButton aria-label="Delete task" icon={<FaTrash />} onClick={() => deleteTask(index)} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
