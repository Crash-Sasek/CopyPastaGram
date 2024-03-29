import { Box, Flex, Avatar } from "@chakra-ui/react";

const PostHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="/img.png" alt="user profile pic" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap="2">
          andrew
          <Box color={"gray.500"}></Box>
        </Flex>
      </Flex>
      <Box></Box>
    </Flex>
  );
};

export default PostHeader;
