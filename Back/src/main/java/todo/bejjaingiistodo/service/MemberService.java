package todo.bejjaingiistodo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import todo.bejjaingiistodo.domain.Member;
import todo.bejjaingiistodo.repository.MemoryMemberRepository;
import todo.bejjaingiistodo.repository.memberRepository;

import java.util.List;
import java.util.Optional;


public class MemberService {
    private final memberRepository memberRepository;


    public MemberService(memberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Long join(Member member){
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member){
        memberRepository.findByName(member.getName()).ifPresent(m -> {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        });
    }

    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    public Optional<Member> findOne(Long memberId){
        return memberRepository.findById(memberId);
    }

}
