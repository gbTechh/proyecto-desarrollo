import classNames from "classnames";

interface Props {
  className?: string;
  x?: number;
  y?: number;
}

function Spacer({ x = 0, y = 0, ...props }: Props) {
  return (
    <div
      style={{
        marginLeft: `${x ? `calc(${x}rem / 8)` : `0px`}`, marginRight: `${x ? `calc(${x}rem / 8)` : `0px`}`, 
        marginTop: `${y ? `calc(${y}rem / 8)` : `0px`}`, marginBottom: `${y ? `calc(${y}rem / 8)` : `0px`}`, 
      }}
      {...props}
      className={classNames('block w-[1px] h-[1px]')}
    />
  );
}

export default Spacer