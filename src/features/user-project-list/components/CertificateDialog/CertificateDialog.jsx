import { useDisclosure } from "@/hooks/useDisclosure";
import { CertificateDialogContent } from "./CertificateDialogContent";
import { Modal } from "@/components/ui/Modal";
import { DownloadDialog } from "../DownloadDialog/DownloadDialog";

export const CertificateDialog = ({ isOpenCertificate, closeCertificate }) => {
  const {
    open: openDownload,
    close: closeDownload,
    isOpen: isOpenDownload,
  } = useDisclosure();

  return (
    <Modal
      className="rounded-b-none"
      isOpen={isOpenCertificate}
      close={closeCertificate}
      hideClose={true}
    >
      <CertificateDialogContent handleDownloadClick={openDownload} />
      <DownloadDialog
        isOpenDownload={isOpenDownload}
        closeDownload={closeDownload}
      />
    </Modal>
  );
};
