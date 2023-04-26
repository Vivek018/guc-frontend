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

  return !isOpenDownload ? (
    <Modal
      className="rounded-b-none"
      isOpen={isOpenCertificate}
      close={closeCertificate}
    >
      <CertificateDialogContent handleDownloadClick={openDownload} />
    </Modal>
  ) : (
    <DownloadDialog
      isOpenDownload={isOpenDownload}
      closeDownload={closeDownload}
    />
  );
};
