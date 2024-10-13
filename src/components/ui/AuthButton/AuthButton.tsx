import { getUserInfo, removeUser } from "@/services/auth.service";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AuthButton = () => {
  const router = useRouter();
  const userInfo = getUserInfo();
  return (
    <>
      {userInfo?.userId ? (
        <Button
          onClick={() => {
            removeUser();
            router.refresh();
            return toast.success("Logged out successfully");
          }}
          variant="outlined"
          color="error"
        >
          Logout
        </Button>
      ) : (
        <Button component={Link} href={"/login"}>
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
