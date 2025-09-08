"use client";

import { Button, Dropdown } from "react-bootstrap";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function SessionInfo() {
  const { data: session } = useSession();

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <span>{session?.user?.name}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          as={Link}
          href={`/app/profile/${session?.user?.id}?view_type=form`}
        >
          <i className="bi bi-person-circle me-2"></i>
          <span>Perfil</span>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => signOut()}>
          <i className="bi bi-box-arrow-right me-2"></i>
          <span>Cerrar sesión</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SessionInfo;
