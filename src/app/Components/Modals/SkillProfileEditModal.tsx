import { ReactNode } from "react";
import { SkillBox, SkillForm } from "../../Ui";
import SkillButton from "../SkillButton";
import SkillModal from "../SkillModal";

function SkillProfileEditModal({
  children,
  open,
  onClose,
  onSubmit,
  editHeader,
}: {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  editHeader: ReactNode;
}) {
  return (
    <SkillModal isOpen={open} onClose={onClose}>
      <SkillModal.Head title="Edit Profile" />
      <SkillForm $mode="four" onSubmit={onSubmit}>
        <SkillModal.Body>
          <SkillBox>
            {editHeader}
            <SkillBox>{children}</SkillBox>
          </SkillBox>
        </SkillModal.Body>
        <SkillModal.Foot>
          <SkillButton variant="primary" size="medium" type="submit">
            Update
          </SkillButton>
        </SkillModal.Foot>
      </SkillForm>
    </SkillModal>
  );
}

export default SkillProfileEditModal;
