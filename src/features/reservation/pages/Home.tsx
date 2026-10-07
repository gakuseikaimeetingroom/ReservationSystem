import { useNavigate } from "react-router-dom";
import { VStack, HStack, Card, Text, Button, Heading } from "@chakra-ui/react";
import { LuCalendarPlus, LuSearch } from "react-icons/lu";
import { useScrollToTop } from "@/shared/hooks/useScrollToTop";
import PageContainer from "@/shared/components/layout/PageContainer";
import AnimatedCard from "@/shared/components/ui/AnimatedCard";

export default function Home() {
  const navigate = useNavigate();

  // ページロード時にトップにスクロール
  useScrollToTop();

  const handleMakeReservation = () => {
    navigate("/reserve");
  };

  return (
    <PageContainer
      title="兵庫県立大学商科キャンパス 部室棟予約システム"
      titleColor="blue.600"
    >
      <VStack gap={8} align="stretch">
        {/* メインアクション */}
        <AnimatedCard delay={0.1}>
          <Card.Header>
            <Heading size="xl" textAlign="center" color="blue.700">
              <HStack justify="center">
                <LuCalendarPlus />
                <Text>予約を開始</Text>
              </HStack>
            </Heading>
          </Card.Header>
          <Card.Body>
            <VStack gap={4} textAlign="center">
              <Text color="gray.600" fontSize="lg">
                ミーティングルームのご予約はこちらから
              </Text>
              <Text color="blue.600" fontSize="sm">
                予約の確定時に使用事項と使用規程の確認をお願いします
              </Text>
              <Button
                size="xl"
                colorScheme="blue"
                px={12}
                py={6}
                onClick={handleMakeReservation}
              >
                新規予約
              </Button>
            </VStack>
          </Card.Body>
        </AnimatedCard>

        {/* 利用案内 */}
        <AnimatedCard delay={0.4}>
          <Card.Header>
            <Heading size="lg">
              <HStack>
                <LuSearch />
                <Text>ご利用案内</Text>
              </HStack>
            </Heading>
          </Card.Header>
          <Card.Body>
            <VStack gap={3} align="stretch">
              <Text fontSize="md" fontWeight="semibold">
                利用時間
              </Text>
              <Text fontSize="sm" color="gray.600" pl={4}>
                • 9:00〜20:00
              </Text>

              <Text fontSize="md" fontWeight="semibold" mt={4}>
                利用ルール
              </Text>
              <Text fontSize="sm" color="gray.600" pl={4}>
                • キャンセルは使用日の3日前までにお願いします
                <br />
                • 利用後は必ず清掃・整理整頓をお願いします
                <br />•
                利用終了時には部屋の状況を撮影し、返却時にアップロードしてください
              </Text>

              <Text fontSize="md" fontWeight="semibold" mt={4}>
                予約可能期間
              </Text>
              <Text fontSize="sm" color="gray.600" pl={4}>
                • 利用日の2週間前〜1ヶ月前の間に予約できます
              </Text>
            </VStack>
          </Card.Body>
        </AnimatedCard>

        <Button
          size="sm"
          variant="ghost"
          color="gray.500"
          fontWeight="normal"
          alignSelf="center"
          mt={4}
          _hover={{ color: "gray.700", bg: "gray.50" }}
          onClick={() => navigate("/admin")}
        >
          管理画面
        </Button>
      </VStack>
    </PageContainer>
  );
}
