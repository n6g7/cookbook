import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  display: flex;
  flex-flow: row nowrap;
  height: 40px;
  padding: 0 16px;
`;
const Input = styled.input`
  border: none;
  flex-grow: 1;
  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  width: 50%;
`;
const Suffix = styled.span`
  color: ${(p) => p.theme.colors.lightGrey};
  font-size: 12px;
  line-height: 14px;
`;

const Field: React.FC<any> = ({ className, suffix = null, ...props }) => {
  return (
    <Container className={className}>
      <Input {...props}></Input>
      {suffix && <Suffix>{suffix}</Suffix>}
    </Container>
  );
};

export default Field;
