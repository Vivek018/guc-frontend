import { Button } from "@/components/ui/Button"
import { Modal } from "@/components/ui/Modal";
import { useDisclosure } from "@/hooks/useDisclosure"
import { CertificateDialog } from "./components/CertificateDialog/CertificateDialog";

export const Project = () => {

  const {isOpen: isOpenCertificate, open: openCertificate, close: closeCertificate} = useDisclosure();

  return (
    <div className="flex h-96 justify-center items-center">
    <Button variant="outline" size="md" onClick={openCertificate}>View Certificate</Button>
    <CertificateDialog isOpenCertificate={isOpenCertificate} closeCertificate={closeCertificate} />
    </div>
  )
}
