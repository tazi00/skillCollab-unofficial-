import { ReactNode, useContext, useState, createContext } from "react";
import ReactDOM from "react-dom";
import {
  SkillBox,
  SkillCard,
  SkillFooter,
  SkillHead,
  SkillList,
  SkillListItem,
  SkillSpan,
} from "../Ui";
import SkillButton from "./SkillButton";

interface SkillModalContextType {
  isOpen: boolean;
  onClose: () => void;
}

const SkillModalContext = createContext<SkillModalContextType>({
  isOpen: false,
  onClose: () => {},
});

export const useSkillModal = () => useContext(SkillModalContext);

function SkillModal({
  children,
  isOpen,
  onClose,
}: {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  if (!modalRoot) {
    const newModalRoot = document.createElement("div");
    newModalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(newModalRoot);
    setModalRoot(newModalRoot);
  }
  return (
    <SkillModalContext.Provider value={{ isOpen, onClose }}>
      {isOpen
        ? ReactDOM.createPortal(
            <SkillCard $variant="modal-lg">
              <SkillCard>
                <SkillBox>{children}</SkillBox>
              </SkillCard>
            </SkillCard>,
            document.getElementById("modal-root")!
          )
        : null}
    </SkillModalContext.Provider>
  );
}

function Head({ title = "Skill Modal" }: { title: string }) {
  const { onClose } = useSkillModal();
  return (
    <SkillHead
      $padding="30px 30px 10px 30px"
      $variant="Primary"
      as={"h2"}
      $color="#19abac"
      $flex={{ $alignItems: "center", $justifyContent: "space-between" }}
    >
      {title}{" "}
      <SkillSpan
        $fontSize="30px"
        $color="#000"
        $cursor="pointer"
        onClick={onClose}
      >
        &times;
      </SkillSpan>
    </SkillHead>
  );
}

function Body({ children }: { children: ReactNode }) {
  return (
    <SkillBox $maxHeight="420px" $overflow="auto scroll" $padding="10px">
      {children}
    </SkillBox>
  );
}

function Foot({ children }: { children: ReactNode }) {
  const { onClose } = useSkillModal();
  return (
    <SkillFooter>
      <SkillList $flex={true} $justifyContent="end" $gap="16px">
        <SkillListItem>
          <SkillButton variant="tertiary" size="medium" onClick={onClose}>
            Cancel
          </SkillButton>
        </SkillListItem>
        <SkillListItem>{children}</SkillListItem>
      </SkillList>
    </SkillFooter>
  );
}

SkillModal.Head = Head;
SkillModal.Body = Body;
SkillModal.Foot = Foot;

export default SkillModal;
