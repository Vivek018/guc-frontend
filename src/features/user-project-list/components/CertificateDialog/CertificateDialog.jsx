import { useDisclosure } from "@/hooks/useDisclosure";
import { CertificateDialogContent } from "./CertificateDialogContent";
import { Modal } from "@/components/ui/Modal";
import { DownloadDialogContent } from "../DownloadDialog/DownloadDialogContent";

export const CertificateDialog = ({ isOpenCertificate, closeCertificate }) => {
  const {
    open: openDownload,
    close: closeDownload,
    isOpen: isOpenDownload,
  } = useDisclosure();

  return (
    <Modal
      className={!isOpenDownload ? "rounded-b-none" : null}
      isOpen={isOpenDownload || isOpenCertificate}
      close={!isOpenDownload ? closeCertificate : closeDownload}
      hideClose={!isOpenDownload}
    >
      {!isOpenDownload ? (
        <CertificateDialogContent handleDownloadClick={openDownload} />
      ) : (
        <DownloadDialogContent />
      )}
    </Modal>
  );
};
