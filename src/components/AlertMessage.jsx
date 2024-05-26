import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button, Divider } from "@chakra-ui/react";
import { useRef } from "react";

const AlertMessage = ({ isOpen, onClose, title, message }) => {
  const cancelRef = useRef();

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent borderColor="gray.200" borderWidth={1} borderRadius="md" bg="pink.50">
          <AlertDialogHeader fontSize="lg" fontWeight="bold" color="gray.700">
            {title}
          </AlertDialogHeader>
          <Divider />
          <AlertDialogBody fontSize="lg" color="gray.700">
            {message}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} colorScheme="blue">
              Cerrar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default AlertMessage;