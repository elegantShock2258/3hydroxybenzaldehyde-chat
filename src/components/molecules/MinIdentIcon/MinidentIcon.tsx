import { useMemo } from "react";
import { minidenticon } from "minidenticons";

export default function Minidenticon({
  username,
  saturation,
  lightness,
  className,
}: {
  username: string;
  saturation?: number;
  lightness?: number;
  className?: string;
}) {
  const svg = useMemo(
    () => minidenticon(username, saturation, lightness),
    [username, saturation, lightness],
  );

  return (
    <span className={className} dangerouslySetInnerHTML={{ __html: svg }} />
  );
}
