import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Felipe Freire</Text>
          <Text color='gray.300' fontSize='small'>
            fellipefreiire3@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Felipe Freire'
        src='https://github.com/fellipefreiire.png'
      />
    </Flex>
  )
}
