import { SkillButton, SkillInputBox, SkillTextBox } from "@/app/Components";
import SkillProfileEditModal from "@/app/Components/Modals";
import useEditProfile from "./useEditProfile";
import { ChangeEvent, FormEvent, useState } from "react";
import { SkillBox, SkillImg } from "@/app/Ui";

function EditProfile() {
  const open = useEditProfile((state) => state.open);
  const onClose = useEditProfile((state) => state.closeEdit);

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
    location: "",
  });

  // Function to handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const EditProfileHeader = (
    <SkillBox>
      <SkillImg $height="200px" $width="100%" />
      <SkillImg $variant="badge" />
      <SkillButton variant="edit">Edit Cover</SkillButton>
    </SkillBox>
  );
  return (
    <SkillProfileEditModal
      onClose={onClose}
      open={open}
      formData={formData}
      onSubmit={handleSubmit}
      onInputChange={handleInputChange}
      editHeader={EditProfileHeader}
    >
      <>
        <SkillInputBox
          placeholder="Enter Your Username"
          type="text"
          label="User Name"
        />
        <SkillInputBox placeholder="Enter Your Name" type="text" label="Name" />
        <SkillInputBox
          placeholder="Enter Your Email"
          type="email"
          label="Email"
        />
        <SkillInputBox
          placeholder="Enter Your Email"
          type="email"
          label="Phone Number"
        />
        <SkillTextBox placeholder="Enter Your Email" label="Description" />
        <SkillInputBox placeholder="Enter Your Location" label="Location" />
      </>
    </SkillProfileEditModal>
  );
}

export default EditProfile;
