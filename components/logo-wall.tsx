import { Container } from "@/components/container";

interface Logo {
  name: string;
  caption?: string;
}

interface LogoWallProps {
  title?: string;
  logos: Logo[];
}

export function LogoWall({ title, logos }: LogoWallProps) {
  return (
    <div className="bg-muted/30 py-16">
      <Container>
        {title && (
          <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-12">
            {title}
          </h3>
        )}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <div className="h-12 flex items-center justify-center mb-2">
                <span className="text-xl font-semibold text-muted-foreground/80">
                  {logo.name}
                </span>
              </div>
              {logo.caption && (
                <span className="text-xs text-muted-foreground">{logo.caption}</span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
