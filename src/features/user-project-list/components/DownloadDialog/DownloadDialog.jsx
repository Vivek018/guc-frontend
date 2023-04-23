import { Modal } from "@/components/ui/Modal";
import { DownloadDialogContent } from "./DownloadDialogContent";

export const DownloadDialog = ({ isOpenDownload, closeDownload }) => {
  return (
    <Modal isOpen={isOpenDownload} close={closeDownload}>
      <DownloadDialogContent />
    </Modal>
  );
};
